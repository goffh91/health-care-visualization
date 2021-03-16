# Description
This repo is example for visualization of health care data.

## Install
Put data json files into /src/api
```
npm install
```

## Run
```
npm start
```

## TODO

- [ ] Main data table component
    - 환자 id (person.person_id)
    - 성별 (person.gender_source_value)
    - 생년월일 (person.birth_datetime)
    - 나이 (현재 시간과 생년월일 이용)
    - 인종 (person.race_source_value)
    - 민족 (person.ethnicity_source_value)
    - 사망 여부 (death.death_date 존재 여부)
    - [x] Paging functions
        - 한 페이지당 row 갯수 선택
        - 페이지 이동 버튼
    - [x] Sorter for every colums
    - [ ] Filter functions
        - 성별
        - 나이
        - 인종
        - 민족
        - 사망 여부
    - [x] Expandable detail view
        - 전체 방문 수 (visit_occurrence row수)
        - 진단 정보 (condition_occurrence.condition_concept_id)
    - [x] Pie charts on top of table
        - 성별 환자 수 Pie Chart
        - 인종별 환자 수 Pie Chart
        - 민족별 환자 수 Pie Chart