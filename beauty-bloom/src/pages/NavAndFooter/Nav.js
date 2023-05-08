import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import beauty from "../Image/beauty.png";

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Navbar fullWidth className=" px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <img
          style={{ width: "2rem", border: "1px solid black" }}
          src={beauty}
          alt=""
        />
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>

        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>

        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="h-4 w-4" />
          </IconButton>

          <IconButton variant="text" color="blue-gray">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

          </IconButton>

          <IconButton className="ms-2" variant="text" color="blue-gray">
            <Link to="Product">Product</Link>
          </IconButton>
          <IconButton className="ms-2" variant="text" color="blue-gray">
            <Link to="ProductFeature">Feature</Link>
          </IconButton>
          <IconButton className="ms-2" variant="text" color="blue-gray">
           <Link   to="ProductFeature">Feature</Link>
          </IconButton>
          <IconButton className="ms-5" variant="text" color="blue-gray">
            <Link to="/">Home</Link>
          </IconButton>
          <IconButton className="ms-5" variant="text" color="blue-gray">
            <Link to="Contact">Contact</Link>
          </IconButton>
          <IconButton className="ms-5" variant="text" color="blue-gray">
            <Link to="About">About</Link>
          </IconButton>

          <IconButton className="ms-2" variant="text" color="blue-gray">

           <  Link to="Login">Login</Link>

          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}
