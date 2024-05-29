import mongoose from "mongoose";

function errorMiddleware(err, req, res, next) {
  switch (true) {
  case err instanceof mongoose.Error.CastError:
    res
      .status(400)
      .json({ message: "Um ou mais dados informados são inválidos." });
    break;
  case err instanceof mongoose.Error.ValidationError:
    const errorMessages = Object.values(err.errors).map((err) => {
      return err.message;
    });

    res.status(400).json({ message: errorMessages.join("; ") });
    break;
  default:
    res.status(500).json({ message: err.message });
  }
}

export default errorMiddleware;
