import { TagDto } from "../../dto/tag.dto";
import { Response, ResponseServer } from "./types";

export const ResponseDto = (responseServer: ResponseServer): Response => {
  const response = responseServer.map((response) => TagDto(response));

  return response;
};
