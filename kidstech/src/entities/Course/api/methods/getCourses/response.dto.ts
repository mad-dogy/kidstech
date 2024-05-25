import { CourseDto } from "../../dto/course.dto";
import { Response, ResponseServer } from "./types";

export const ResponseDto = (responseServer: ResponseServer): Response => {
  const response = responseServer.map((response) => CourseDto(response));

  return response;
};
