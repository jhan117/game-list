package kr.ac.kumoh.ce.s20240058.backend.controller

import kr.ac.kumoh.ce.s20240058.backend.model.Game
import kr.ac.kumoh.ce.s20240058.backend.service.GameService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["https://kaye-game.netlify.app", "http://localhost:3000"])
@RestController
@RequestMapping("/api/games")
class GameController(private val gameService: GameService) {

    /**
     * Fetch all games from the database.
     * @return List of all games.
     */
    @GetMapping
    fun getAllGames(): ResponseEntity<List<Game>> {
        val games = gameService.getAllGames()
        return if (games.isNotEmpty()) {
            ResponseEntity.ok(games)
        } else {
            ResponseEntity.noContent().build()
        }
    }

    /**
     * Fetch games filtered by genre.
     * @param genre Genre to filter games.
     * @return List of games in the specified genre.
     */
    @GetMapping("/genre/{genre}")
    fun getGamesByGenre(@PathVariable genre: String): ResponseEntity<List<Game>> {
        val games = gameService.getGamesByGenre(genre)
        return if (games.isNotEmpty()) {
            ResponseEntity.ok(games)
        } else {
            ResponseEntity.noContent().build()
        }
    }

    /**
     * Add a new game to the database.
     * @param game Game data to add.
     * @return The added game.
     */
    @PostMapping
    fun addGame(@RequestBody game: Game): ResponseEntity<Game> {
        val addedGame = gameService.addGame(game)
        return ResponseEntity.ok(addedGame)
    }

    /**
     * Update all games in the database with GIF data.
     */
    @PutMapping("/update-gif-data")
    fun updateAllGamesGifData(): ResponseEntity<Void> {
        gameService.updateAllGamesWithGifData()
        return ResponseEntity.ok().build()
    }
}
