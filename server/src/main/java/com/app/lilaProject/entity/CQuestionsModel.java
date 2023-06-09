package com.app.lilaProject.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name= "questions")
public class CQuestionsModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "ask")
    private String ask;
    @Column(name = "type")
    private String type;
    @Column(name = "value")
    private String value;
    }
