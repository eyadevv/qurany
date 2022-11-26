import validateRoute from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(async function handle(req, res, USER) {
    await prisma.user.findMany({
        where: {
            id: USER.id,
        },
    }).then((data) => {
        res.status(200).json(data);
    }
    ).catch((err) => {
        console.log(err);
        res.status(401).json({ message: "User not found" });
    }
    );
});

