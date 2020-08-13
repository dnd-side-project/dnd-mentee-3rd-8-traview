package com.traview.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // JPA Entity 클래스들이 BaseTimeEntity를 상속할 경우 필드들도 칼럼으로 인식하도록 합니다
@EntityListeners(AuditingEntityListener.class) // BaseTimeEntity 클래스에 Auditing  기능 포함
public abstract class BaseTimeEntity {

    @CreatedDate // Entity가 생성되어 저장될 때 시간이 자동 저장됨.
    private LocalDateTime createdDate;

    @LastModifiedDate // Entity의 값을 변경할 때 시간이 자동 저장됨.
    private LocalDateTime modifiedDate;

    public LocalDateTime getCreatedTime() {
        return createdDate;
    }

    public LocalDateTime getModifiedDate(){
        return modifiedDate;
    }
}
