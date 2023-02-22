import Mock from "mockjs"
import {nanoid} from "nanoid";
Mock.mock("/mock/loginToken",{code:200,data:nanoid()})