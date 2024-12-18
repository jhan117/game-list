package kr.ac.kumoh.ce.s20240058.backend.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "games")
data class Game(
    @Id
    val id: String? = null,
    val name: String,
    val genre: String,
    val developer: String,
    val genres: List<String>,
    val releaseDate: String,
    val website: String,
    val interestLevel: Int,
    val reasonForInterest: String,
)
