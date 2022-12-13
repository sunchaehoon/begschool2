import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import * as S from "./Styled";
import { API } from "../../API";

const Schedule = () => {
  const [scheduleList, setScheduleList] = useState<any>([]);


  useEffect(() => {
    console.log(localStorage.getItem("userid"));
    API.get("/school/time", {
      headers: {
        id: localStorage.getItem("userid"),
      },
    })
    .then((res) => {
      console.log(res.data.row);
      setScheduleList(res.data.row);
    })
    .catch((error) => {
      console.error(error);
    });
    // console.log(scheduleList);
    // console.log(scheduleList.time);
  }, []);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Form>
          <S.Table>
            <tbody>
              <S.tr>
                <S.th><S.RowText>＼</S.RowText></S.th>
                <S.th><S.RowText>월</S.RowText></S.th>
                <S.th><S.RowText>화</S.RowText></S.th>
                <S.th><S.RowText>수</S.RowText></S.th>
                <S.th><S.RowText>목</S.RowText></S.th>
                <S.th><S.RowText>금</S.RowText></S.th>
              </S.tr>
              <S.tr>
                <S.td><S.RowText>1</S.RowText></S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "1") {
                    return (
                      <S.td key={i}>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </S.tr>
              <S.tr>
                <S.td><S.RowText>2</S.RowText></S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "2") {
                    return (
                      <S.td key={i}>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </S.tr>
              <S.tr>
                <S.td><S.RowText>3</S.RowText></S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "3") {
                    return (
                      <S.td key={i}>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </S.tr>
              <S.tr>
                <S.td><S.RowText>4</S.RowText></S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "4") {
                    return (
                      <S.td key={i}>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </S.tr>
              <S.tr>
                <S.td><S.RowText>5</S.RowText></S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "5") {
                    return (
                      <S.td key={i}>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </S.tr>
              <S.tr>
                <S.td><S.RowText>6</S.RowText></S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "6") {
                    return (
                      <S.td key={i}>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </S.tr>
              <S.tr>
                <S.td><S.RowText>7</S.RowText></S.td>
                {scheduleList.map((a: any, i: number) => {
                  if (scheduleList[i].time === "7") {
                    return (
                      <S.td key={i}>{scheduleList[i].timeName}</S.td>
                    );
                  }
                })}
              </S.tr>
            </tbody>
          </S.Table>
        </S.Form>
      </S.Wrapper>
    </>
  );
};

export default Schedule;
