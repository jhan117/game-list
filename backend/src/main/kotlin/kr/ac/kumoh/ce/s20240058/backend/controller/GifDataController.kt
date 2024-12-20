package kr.ac.kumoh.ce.s20240058.backend.controller

import kr.ac.kumoh.ce.s20240058.backend.model.GifData
import kr.ac.kumoh.ce.s20240058.backend.service.GifDataService
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
@RequestMapping("/api/gif_data")
class GifDataController(private val gifDataService: GifDataService) {
    @GetMapping("/name/{name}")
    fun getByName(@PathVariable name: String): GifData = gifDataService.getByName(name)

    // 초기 데이터 생성용
    @PostMapping
    fun addGifData(@RequestBody gifData: GifData): GifData = gifDataService.addGifData(gifData)

    // 테스트용
    @GetMapping
    fun getAllGifData(): List<GifData> = gifDataService.getAllGifData()
}