require("dotenv").config();

// Port
const port = process.env.PORT;
const host = process.env.HOST;

// Package
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const moment = require("moment");
const cron = require("node-cron");
const path = require("path");

// Router
const router = require("./app/routers");

// Express
const app = express();

// Model
const scheduleModel = require("./app/models/scheduleModel");

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());
app.use(morgan("dev"));

app.use("/v1", router);

app.use("*", (req, res, next) => {
  const err = new Error("Page not found");
  next(err);
});

app.use((err, req, res, next) => {
  if (err.message === "Uploaded file must be png, jpg or jpeg file") {
    res.status(400).send({
      status: false,
      message: err.message,
    });
  } else if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).send({
      status: false,
      message: "File image too large. Max 2MB.",
    });
  } else {
    res.status(404).send({
      status: false,
      message: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
  cron.schedule(
    "30 0 * * *",
    () => {
      const dataMovie = [
        {
          id: 86,
          title: "1917",
          category: "13+",
        },
        {
          id: 88,
          title: "Bad Boys For Life",
          category: "R",
        },
        {
          id: 90,
          title: "Extraction",
          category: "R",
        },
        {
          id: 91,
          title: "Ford v Ferrari",
          category: "13+",
        },
        {
          id: 92,
          title: "Godzilla vs. Kong",
          category: "PG-13",
        },
      ];
      const cinema = [1, 2, 3];
      const city = [1, 2, 3];
      const time = [
        "10:00am",
        "01:00pm",
        "03:00pm",
        "05:00pm",
        "07:00pm",
        "09:00pm",
        "11:00pm",
      ];
      dataMovie.map(async (item, index) => {
        const idMovie = item.id;
        const title = item.title;
        const category = item.category;
        for (let c = 0; c < city.length; c++) {
          for (let a = 0; a < cinema.length; a++) {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const dayNow = moment(tomorrow).format("dddd");
            const dataSchedule = {
              day: dayNow,
              date: tomorrow,
              price: 30000,
              time: JSON.stringify(time),
              idCity: city[c],
              idMovie,
              idCinema: cinema[a],
            };
            let idSchedule;
            const scheduleResult = await scheduleModel.createSchedule(
              dataSchedule
            );
            idSchedule = scheduleResult[0].id;
            for (let i = 0; i < time.length; i++) {
              for (let j = 1; j <= 98; j++) {
                const dataTicket = {
                  movieTitle: title,
                  category,
                  available: true,
                  idSchedule,
                  time: time[i],
                  idSeat: j,
                  idMovie,
                };
                await scheduleModel.createTicket(dataTicket);
              }
            }
          }
        }
        console.log(`${index} Schedule and ticket has been created`);
      });
    },
    {
      scheduled: true,
      timezone: "Asia/Jakarta",
    }
  );
});
