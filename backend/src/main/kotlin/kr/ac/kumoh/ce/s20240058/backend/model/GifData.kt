package kr.ac.kumoh.ce.s20240058.backend.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "gifData")
data class GifData(
    @Id
    val id: String? = null,
    val name: String,
    val postId: String,
    val altText: String,
    val hoverImgUrl: String,
)
