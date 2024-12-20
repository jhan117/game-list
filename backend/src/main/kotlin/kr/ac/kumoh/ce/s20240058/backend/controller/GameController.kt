package kr.ac.kumoh.ce.s20240058.backend.controller

import kr.ac.kumoh.ce.s20240058.backend.model.Game
import kr.ac.kumoh.ce.s20240058.backend.service.GameService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["https://kaye-game.netlify.app", "http://localhost:3000"])
@RestController
@RequestMapping("/api/games")
class GameController (private val gameService: GameService) {
    @GetMapping
    fun getAllGames(): List<Game> = gameService.getAllGames()

    @GetMapping("/genre/{genre}")
    fun getByGenre(@PathVariable genre: String): List<Game> = gameService.getByGenre(genre)

    // 초기 데이터 생성용
    @PostMapping
    fun addGame(@RequestBody game: Game): Game = gameService.addGame(game)
    // 데이터 합치기용
    @PutMapping("/updateGifData")
    fun updateGifData() {
        gameService.updateAllGames()
    }
}