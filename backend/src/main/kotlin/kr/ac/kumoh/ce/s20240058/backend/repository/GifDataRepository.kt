package kr.ac.kumoh.ce.s20240058.backend.repository

import kr.ac.kumoh.ce.s20240058.backend.model.GifData
import org.springframework.data.mongodb.repository.MongoRepository

interface GifDataRepository: MongoRepository<GifData, String> {
    fun findByName(name: String): GifData
}