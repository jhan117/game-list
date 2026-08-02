package kr.ac.kumoh.ce.s20240058.backend.model

import com.fasterxml.jackson.annotation.JsonInclude
import org.springframework.data.mongodb.core.mapping.Document

@JsonInclude(JsonInclude.Include.NON_NULL)
@Document(collection = "gifData")
data class GifData(
    val id: String? = null,
    val name: String? = null,
    val altText: String? = null,
    val gifUrl: String? = null,
    val hoverImgUrl: String? = null,
)
