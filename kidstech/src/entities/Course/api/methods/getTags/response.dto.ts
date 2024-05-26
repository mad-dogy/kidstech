import { allThemesTag } from "../../../model/constants/tags";
import { Tag } from "../../../model/types/course.entity";
import { TagDto } from "../../dto/tag.dto";
import { Response, ResponseServer } from "./types";

export const ResponseDto = (responseServer: ResponseServer): Response => {
  const response: Array<Tag> = [allThemesTag];

  responseServer.map((item) => {
    response.push(TagDto(item))
  });

  return response;
};
