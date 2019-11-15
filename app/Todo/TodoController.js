import { todoModel } from "./TodoSchema";
import BaseController from "../config/BaseController";

export class TodoController extends BaseController {
  constructor() {
    super();
  }
  index = async (req, res) => {
    try {
      const todos = await todoModel.find();

      if (todos) {
        return res.status(this.status.OK).json({
          todos,
          status: true
        });
      }
      return res.status(this.status.BAD_REQUEST).json({
        message: "Failed",
        status: False
      });
    } catch (err) {
      return res.status(this.status.INTERNAL_SERVER_ERROR).json({
        status: 0,
        err
      });
    }
  };

  create = async (req, res) => {
    try {
      const resp = new todoModel(req.body);
      const todo = await resp.save();
      let todos = [];
      todos.push(todo);

      if (todos) {
        return res.status(this.status.CREATED).json({
          todo: todos,
          status: true
        });
      }

      return res.status(this.status.BAD_REQUEST).json({
        message: "Failed",
        status: false
      });
    } catch (err) {
      return res.status(this.status.INTERNAL_SERVER_ERROR).json({
        status: 0,
        err
      });
    }
  };

  remove = async (req, res) => {
    try {
      const todos = await todoModel.deleteOne({ _id: req.params.id });

      if (todos) {
        return res.status(this.status.NO_CONTENT).json({
          message: "Resource modified successfully.",
          status: 1
        });
      }

      return res.status(this.status.NOT_MODIFIED).json({
        message: "Resource not modified",
        status: 0
      });
    } catch (err) {
      return res.status(this.status.INTERNAL_SERVER_ERROR).json({
        status: 0,
        err
      });
    }
  };
}
