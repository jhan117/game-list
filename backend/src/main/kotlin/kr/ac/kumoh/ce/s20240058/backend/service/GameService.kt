package kr.ac.kumoh.ce.s20240058.backend.service

import kr.ac.kumoh.ce.s20240058.backend.model.Game
import kr.ac.kumoh.ce.s20240058.backend.repository.GameRepository
import kr.ac.kumoh.ce.s20240058.backend.repository.GifDataRepository
import org.springframework.stereotype.Service

@Service
class GameService (private val gameRepository : GameRepository, private  val gifDataRepository: GifDataRepository) {
    fun getAllGames(): List<Game> = gameRepository.findAll()
    fun getByGenre(genre: String): List<Game> = gameRepository.findByGenre(genre)

    fun addGame(game: Game): Game = gameRepository.save(game)

    // 업데이트
    fun updateAllGames(){
        val games = gameRepository.findAll()

        games.forEach { game ->
            val gifData = gifDataRepository.findByName(game.name)

            game.gifData = gifData
            gameRepository.save(game)
        }
    }
}