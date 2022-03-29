package com.mint.backend.repository;

import com.mint.backend.domain.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @packageName : com.mint.backend.repository
 * @fileName : SectionRepository
 * @date : 2022-03-25
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
public interface SectionRepository extends JpaRepository<Section,Long> {
    List<Section> findAllByTimesId(@Param(value = "time_id")Long timesId);

}
