import { Course, Tag } from "../../../model/types/course.entity";
import { CourseServer, TagServer } from "../../types/course.server";

export type Request = {
  tag?: Tag
};

export type RequestServer = {
  tag?: TagServer
};

export type Response = Course[];

export type ResponseServer = CourseServer[];
