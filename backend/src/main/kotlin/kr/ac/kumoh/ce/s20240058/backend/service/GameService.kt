package kr.ac.kumoh.ce.s20240058.backend.service

import kr.ac.kumoh.ce.s20240058.backend.model.Game
import kr.ac.kumoh.ce.s20240058.backend.repository.GameRepository
import org.springframework.stereotype.Service

@Service
class GameService (private val gameRepository : GameRepository) {
    fun getAllGames(): List<Game> = gameRepository.findAll()
    fun getByGenre(genre: String): List<Game> = gameRepository.findByGenre(genre)

    fun addGame(game: Game): Game = gameRepository.save(game)
}