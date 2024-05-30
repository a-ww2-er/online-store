"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { IoMdKey } from "react-icons/io";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { BsGoogle } from "react-icons/bs";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { loginSchema } from "@/validators/schemas";
import { redirect, useRouter } from "next/navigation";

type Props = {};

const Login = (props: Props) => {
  const { toast } = useToast();
  const [show, setShow] = useState(false);
  const [login, { data, error, isSuccess, isLoading }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      form.reset();
      toast({
        title: "Login Successful",
        description: "Welcome back",
      });
      redirect("/");
    }
    if (error) {
      console.log(error);
      if ("data" in error) {
        const errorData = error as any;
        toast({
          variant: "destructive",
          title: "Login failed",
          description: (
            <span className="flex flex-col">
              <p>{errorData?.data?.message || errorData?.message}</p>
              {errorData?.data?.errorCode && (
                <p>Error : {errorData?.data?.errorCode}</p>
              )}
            </span>
          ),
        });
      } 
    //   else {
    //     toast({
    //       variant: "destructive",
    //       title: "Login failed",
    //       description: error?.error,
    //     });
    //   }
    }
  }, [isSuccess, error, data?.message]);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  });

  async function onSubmit(data: any) {
    // setFormValues(data);

    await login(data);
  }

  form.watch();
  return (
    <div role="tabpanel" className="tab-panel active" id="login">
      <Form {...form}>
        <form className={""} onSubmit={form.handleSubmit(onSubmit)}>
          <div className={"space-y-2 flex-col flex gap-3"}>
            <span className="flex flex-col">
              <h1 className="text-[2.2rem] font-black">Login</h1>
              <p className="sub-title block text-gray-600">
                {" "}
                Welcome back! login One Faster account
              </p>
            </span>
            <FormField
              control={form.control}
              name={"email" as never}
              render={({ field }) => {
                return (
                  <>
                    <FormItem className="flex flex-col items-start w-full ">
                      <FormLabel
                        htmlFor="email"
                        className="text-left flex justify-between w-full"
                      >
                        <p className="text-[1rem]"> Email </p>{" "}
                      </FormLabel>
                      <FormControl className="dark:text-black">
                        <Input {...field} placeholder={"Enter your email"} />
                      </FormControl>{" "}
                      <FormMessage />
                    </FormItem>
                  </>
                );
              }}
            />
            <FormField
              control={form.control}
              name= {"password" as never}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col items-start w-full mb-4 ">
                    <FormLabel
                      htmlFor="password"
                      className="text-left flex justify-between w-full"
                    >
                      <p className="text-[1rem]"> Password </p>
                    </FormLabel>
                    <FormControl className="dark:text-black">
                      <span className={"relative w-full"}>
                        <Input
                          placeholder={"Enter your password"}
                          type={!show ? "password" : "text"}
                          {...field}
                          className={"relative w-full "}
                        />
                        {!show ? (
                          <IoEyeOff
                            className="absolute bottom-3 right-2 z-1 cursor-pointer"
                            size={20}
                            onClick={() => setShow(true)}
                          />
                        ) : (
                          <IoEye
                            className="absolute bottom-3 right-2 z-1 cursor-pointer"
                            size={20}
                            onClick={() => setShow(false)}
                          />
                        )}
                      </span>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* <div className="form-group">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  name="username"
                  id="username"
                  placeholder="Username or email"
                  autoComplete="username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div> */}
            <div className="flex flex-col items justify-between ">
              <span className="w-full flex justify-between items-center mb-4">
                <label className="flex items-center text-[0.8rem] !font-normal">
                  <input
                    type="checkbox"
                    name="rememberme"
                    id="rememberme"
                    value="forever"
                    className="mr-2"
                  />
                  <span>Remember me</span>
                </label>
                <p className=" text-right">
                  <a
                    href="#"
                    className="text-blue-800 text-[0.8rem] !font-normal"
                  >
                    forgot password?
                  </a>
                </p>
              </span>
              {!isLoading ? (
                <Button
                  type="submit"
                  className={
                    "mt-8 w-full text-white  bg-[#164ea3] font-normal text-lg"
                  }
                >
                  Login
                </Button>
              ) : (
                <span
                  className={
                    "mt-8  w-full bg-[#164ea3]  px-4 py-2 flex items-center justify-center rounded-md"
                  }
                >
                  <ClipLoader color="#ffffff" size={20} />
                </span>
              )}
              <span className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                or
              </span>
              <span className="w-full flex gap-4 items-center justify-between mb-6">
                <Button
                  type="submit"
                  className="p-4 w-full text-[0.9rem] bg-slate-700 gap-2 text-white flex items-center rounded"
                >
                  <p>Continue with google</p>{" "}
                  <BsGoogle className="text-[1rem] text-white" />
                </Button>
                <Button
                  type="submit"
                  className="p-4 w-full text-[0.9rem] bg-slate-700 text-white rounded "
                >
                  Login Key{" "}
                  <IoMdKey className="ml-2 text-[1.2rem] text-white" />
                </Button>
              </span>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
