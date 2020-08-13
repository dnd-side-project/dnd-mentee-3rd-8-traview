package com.traview.domain.posts;

import com.traview.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter // 클래스 내 모든 필드의 Getter 메소드를 자동생성
@NoArgsConstructor // 기본생성자 자동추가 public Posts(){}와 같은 효과
@Entity // 테이블과 링크될 클래스임을 나타냄.
public class Posts extends BaseTimeEntity {

    @Id // 테이블의 PK필드를 나타냄
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK의 생성 규칙. GenerationType.IDENTITY를 해야 auto_increment가 가능
    private Long id;

    @Column(length = 500, nullable = false) // 테이블의 칼럼. varchar(255)에서 500으로 늘린것
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false) // 타입을 TEXT로 변경
    private String content;

    private String author;

    @Builder // 빌더 패턴 클래스 생성. 생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
    public Posts(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
