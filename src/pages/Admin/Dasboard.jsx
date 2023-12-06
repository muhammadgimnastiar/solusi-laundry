import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useAuth } from "../../utils/AuthContext";
import React, { useState, useEffect } from "react";
import api from "../../api/AxiosConfig";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "name",
  "Status Pesanan",
  "Paket",
  "Status Pembayaran",
  "Total Bayar",
  "",
];

// const paket = {
//   'Kilat' : '10000',
//   'Reguler'
// }
export function Dashboard() {
  const [users, setUser] = useState([]);
  const [paket, setPaket] = useState([]);

  useEffect(() => {
    getUsers();
    getPaket();
  }, []);

  const getUsers = async () => {
    const response = await api.get("/users");
    setUser(response.data);
  };
  const getPaket = async () => {
    const response = await api.get("/pakets");
    setPaket(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const { logoutUser } = useAuth();
  return (
    <div className="bg-bg ">
      <Card className="h-full w-full" shadow={false}>
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none container mx-auto"
        >
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Daftar Pesanan
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Lihat semua informasi pesanan pelanggan
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm" onClick={() => logoutUser()}>
                Logout
              </Button>
              <Link to={"add"}>
                <Button
                  className="flex items-center gap-3 bg-primary-blue"
                  size="sm"
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Tambah
                  Pesanan
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-72">
            <Input
              label="Pencarian"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-secondary-blue p-4 my-3"
                  >
                    <Typography
                      variant="normal"
                      color="white"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(
                ({ id, name, status, paket, berat, total, dibayar }, index) => {
                  const isLast = index === users.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      {/* name */}
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={
                              "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                            }
                            alt={name}
                            size="sm"
                          />

                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      {/* Status Pesanan */}
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {status}
                        </Typography>
                      </td>

                      {/* Paket */}
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {paket.name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {paket.waktu < 24 ? paket.waktu : paket.waktu / 24}
                            {paket.waktu < 24 ? <> Jam</> : <> Hari</>} ({" "}
                            {berat} kg )
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={dibayar ? "Lunas" : "Belum Lunas"}
                            color={dibayar ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      {/* Total bayar */}
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          Rp {total}
                        </Typography>
                      </td>
                      {/* Edit User */}
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <Link to={`edit/${id}`}>
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 1
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
