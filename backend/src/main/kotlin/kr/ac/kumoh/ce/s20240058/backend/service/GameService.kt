package kr.ac.kumoh.ce.s20240058.backend.service

import kr.ac.kumoh.ce.s20240058.backend.model.Game
import kr.ac.kumoh.ce.s20240058.backend.repository.GameRepository
import kr.ac.kumoh.ce.s20240058.backend.repository.GifDataRepository
import org.springframework.stereotype.Service

@Service
class GameService(
    private val gameRepository: GameRepository,
    private val gifDataRepository: GifDataRepository
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
            val gifData = gifDataRepository.findByName(game.name)

            // If GIF data exists, update the game object
            if (gifData != null) {
                game.gifData = gifData
                gameRepository.save(game)
            }
        }
    }
}
