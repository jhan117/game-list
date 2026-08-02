package kr.ac.kumoh.ce.s20240058.backend.service

import kr.ac.kumoh.ce.s20240058.backend.dto.PatchGameRequest
import kr.ac.kumoh.ce.s20240058.backend.model.Game
import kr.ac.kumoh.ce.s20240058.backend.repository.GameRepository
import kr.ac.kumoh.ce.s20240058.backend.repository.GifDataRepository
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Service

@Service
class GameService(
    private val gameRepository: GameRepository,
    private val gifDataRepository: GifDataRepository,
    private val mongoTemplate: MongoTemplate
) {

    /**
     * Fetch all games from the repository.
     * @return List of all games.
     */
    fun getAllGames(): List<Game> = gameRepository.findAll()

    /**
     * Fetch games filtered by genre.
     * @param genre Genre to filter games.
     * @return List of games in the specified genre.
     */
    fun getGamesByGenre(genre: String): List<Game> = gameRepository.findByGenre(genre)

    /**
     * Add a new game to the repository.
     * @param game Game data to add.
     * @return The added game.
     */
    fun addGame(game: Game): Game = gameRepository.save(game)

    /**
     * Update all games with GIF data by matching game names.
     * Updates the repository with the new GIF data.
     */
    fun updateAllGamesWithGifData() {
        val games = gameRepository.findAll()

        games.forEach { game ->
            // Fetch corresponding GIF data
            if (game.name != null) {
                val gifData = gifDataRepository.findByName(game.name)

                // If GIF data exists, update the game object
                if (gifData != null) {
                    game.gifData = gifData
                    gameRepository.save(game)
                }
            }
        }
    }

    fun patchGameByName(name: String, request: PatchGameRequest): Game {
        // Criteria.where("name"): DB의 name 기준으로 검색
        // .regex("^$name$", "i"): 정규표현식(name으로 시작(^)), i 옵션(대소문자 무시)
        val query = Query(Criteria.where("name").regex("^$name$", "i"))
        val update = Update()

        request.set?.forEach { (key, value) -> update.set(key, value) }
        request.unset?.forEach { field -> update.unset(field) }

        // 몽고 db가 db에 맞는 게임 찾아서 1개만 수정 실행함
        // Game::class.java(Game 모델이라고 알려줌 몽고 db에게 근데 우리는 코틀린이라 이걸 자바 전용으로 넘겨줘야 해)
        mongoTemplate.updateFirst(query, update, Game::class.java)
        return mongoTemplate.findOne(query, Game::class.java)
            ?: throw IllegalArgumentException("Game not found with name: $name")
    }
}
