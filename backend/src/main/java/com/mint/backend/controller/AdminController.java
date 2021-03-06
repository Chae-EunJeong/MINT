package com.mint.backend.controller;

import com.mint.backend.dto.RequestConcertDto;
import com.mint.backend.dto.RequestExistAuthDto;
import com.mint.backend.dto.ResponseResourceDto;
import com.mint.backend.service.ConcertService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * @packageName : com.mint.backend.controller
 * @fileName : adminController
 * @date : 2022-03-24
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminController {

    private final ConcertService concertService;

    /**
     *
     * @param poster
     * @param thumnail
     * @param description
     * @param seats
     * @param data
     * @return
     * @throws IOException
     *
     * @modified 박창현
     * 이미지 저장 폴더 명을 컨트랙트 주소를 잘라 저장하게 변경했습니다
     * 65번줄
     */
    @ApiOperation(
            value = "콘서트 등록"
    )
    @PostMapping("/concert")
    public ResponseEntity<Boolean> create(@RequestPart(value = "poster") MultipartFile poster,
                                          @RequestPart(value = "thumnail") MultipartFile thumnail,
                                          @RequestPart(value = "description") MultipartFile description,
                                          @RequestPart(value = "seats") MultipartFile seats,
                                          @RequestPart(value = "key") RequestConcertDto data) throws IOException {
        System.out.println("poster = " + poster);
        System.out.println("thumnail = " + thumnail);
        System.out.println("description = " + description);
        System.out.println("seats = " + seats);
        //디렉토리생성
        String folderPath = System.getProperty("user.dir")+File.separator + "src" +
                File.separator+"main"+File.separator + "resources"+File.separator+"image" +
                File.separator + data.getContractAddress().substring(0, 15);
        File makeFolder = new File(folderPath);
        if (!makeFolder.exists()) {
            try {
                makeFolder.mkdirs();
            } catch (Exception e) {
                e.getStackTrace();
            }
        }

        //콘서트 등록
        boolean result = concertService.create(poster, thumnail, description, seats, data);
        return new ResponseEntity<Boolean>(result, HttpStatus.OK);
    }
    @ApiOperation(
            value = "콘서트 수정"
    )
    @PutMapping("/concert")
    public ResponseEntity<Boolean> update(@RequestParam Long concertId,int status) {
        return new ResponseEntity(concertService.update(concertId,status),HttpStatus.OK);
    }

    @ApiOperation(
            value = "콘서트 삭제"
    )
    @DeleteMapping("/concert")
    public ResponseEntity<Boolean> delete(@RequestParam Long concertId) {
        boolean result = concertService.delete(concertId);
        return new ResponseEntity<Boolean>(result, HttpStatus.OK);
    }

    @ApiOperation(
            value = "관리자 권한 확인"
    )
    @PostMapping("/concert/admin")
    public ResponseEntity<Boolean> existAuth(@RequestBody RequestExistAuthDto admin) {
        boolean flag = false;
        if (admin.getId().equals("admin") && admin.getPassword().equals("admin")) {
            flag = true;
        }

        return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
    }

    @ApiOperation(
            value = "Uri gif, mp4 등록"
    )
    @PostMapping("/concert/resource")
    public ResponseEntity<ResponseResourceDto> registUriFile(@RequestPart(value = "gif") MultipartFile gif,
                                                             @RequestPart(value = "mp4") MultipartFile mp4) throws IOException {
        String folderPath = System.getProperty("user.dir")+File.separator + "src" +
                File.separator+"main"+File.separator + "resources"+File.separator+"image" +
                File.separator + "URIImg";
        System.out.println(gif);
        System.out.println(mp4);
        File makeFolder = new File(folderPath);
        if (!makeFolder.exists()) {
            try {
                makeFolder.mkdirs();
            } catch (Exception e) {
                e.getStackTrace();
            }
        }
        ResponseResourceDto resourceDto = concertService.saveFiles(gif, mp4);
        if(resourceDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<ResponseResourceDto>(resourceDto, HttpStatus.OK);
    }

}
