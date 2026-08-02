package kr.ac.kumoh.ce.s20240058.backend.dto

data class PatchGameRequest(
    val set: Map<String, Any>? = null,  // 수정 및 추가할 이름 (Key: Value)
    val unset: List<String>? = null,    // 지울 필드 이름 (List)
)
