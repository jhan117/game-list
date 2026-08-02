package kr.ac.kumoh.ce.s20240058.backend.model

import com.fasterxml.jackson.annotation.JsonInclude
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field

@JsonInclude(JsonInclude.Include.NON_NULL)
@Document(collection = "games")
data class Game(
    @Id
    val id: String? = null,
    val name: String? = null,
    val genre: String? = null,
    val developer: String? = null,
    val genres: List<String>? = null,
    val releaseDate: String? = null,
    val website: String? = null,
    val interestLevel: Int? = null,
    val reasonForInterest: String? = null,

    @Field("gifData")
    var gifData: GifData? = null,
)
