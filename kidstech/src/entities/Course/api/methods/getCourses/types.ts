import { Course } from "../../../model/types/course.entity";
import { CourseServer, TagServer } from "../../types/course.server";

export type Request = {
  tagId?: string
};

export type RequestServer = {
  tag?: TagServer
};

export type Response = Array<Course>;

export type ResponseServer =  Array<CourseServer>;
