package kr.ac.kumoh.ce.s20240058.backend.service

import kr.ac.kumoh.ce.s20240058.backend.model.GifData
import kr.ac.kumoh.ce.s20240058.backend.repository.GifDataRepository
import org.springframework.stereotype.Service

@Service
class GifDataService (private val gifDataRepository : GifDataRepository) {
    fun getByName(name: String): GifData = gifDataRepository.findByName(name)

    fun addGifData(gifData: GifData): GifData = gifDataRepository.save(gifData)
    fun getAllGifData(): List<GifData> = gifDataRepository.findAll()
}