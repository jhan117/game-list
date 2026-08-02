# 1단계 (builder): Gradle을 사용하여 최신 Kotlin 소스 코드를 빌드함
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app

# Gradle 실행 파일과 소스 코드를 복사함
COPY gradlew .
COPY gradle gradle
COPY build.gradle.kts .
COPY settings.gradle.kts .
COPY src src

# gradlew에 실행 권한을 부여하고 프로젝트를 빌드함 (빠른 배포를 위해 테스트는 생략)
RUN chmod +x gradlew
RUN ./gradlew build -x test

# 2단계 (production): 빌드된 jar 파일을 가벼운 JRE 환경에서 실행함
FROM eclipse-temurin:21-jre
WORKDIR /app

# 1단계(builder)에서 성공적으로 만들어진 최신 jar 파일만 복사해옴
COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]