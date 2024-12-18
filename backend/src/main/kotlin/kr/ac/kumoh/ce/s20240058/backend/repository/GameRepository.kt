package kr.ac.kumoh.ce.s20240058.backend.repository

import kr.ac.kumoh.ce.s20240058.backend.model.Game
import org.springframework.data.mongodb.repository.MongoRepository

interface GameRepository: MongoRepository<Game, String> {
    fun findByGenre(genre: String): List<Game>
}