import Express from "express"
import medicineRoute from "./router/medicineRouter"
import adminRoute from "./router/adminRouter"

const app = Express()
/** allow to read a body request with
 * JSON format
 */
app.use(Express.json())

/** prefix for medicine route */
app.use(`/medicine`, medicineRoute)

app.use(`/admin`, adminRoute)

const PORT = 1992
app.listen(PORT, () => {  // arti () => {} = callback function
    console.log(`server Drugstore run on PORT ${PORT}`);
 })
