package kr.ac.kumoh.ce.s20240058.backend.model

import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "gifData")
data class GifData(
    val name: String,
    val altText: String,
    val gifUrl: String,
    val hoverImgUrl: String,
)
