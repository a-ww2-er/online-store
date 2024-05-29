"use client"
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { registerSchema } from '@/validators/schemas';
import React, { useEffect ,useState} from 'react'
import { useForm } from 'react-hook-form';
import { useToast } from '../ui/use-toast';
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ClipLoader } from 'react-spinners';
import { BsGoogle } from "react-icons/bs";

type Props = {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  };

const Register = (props: Props) => {
    const { toast } = useToast();
    const [show, setShow] = useState(false);
    const [register, { data, error, isSuccess,isLoading }] = useRegisterMutation();

    useEffect(() => {
        if (isSuccess) {
            form.reset()
          const message = data?.message || "Activate your account";
          toast({
            title: "Registration Successful",
            description:"You can proceed to login!"
          });
        props.setActiveTab("Register")
        }
        if (error) {
            console.log(error)
          if ("data" in error) {
            const errorData = error as any
            toast({
              variant: "destructive",
              title: errorData?.data?.message || errorData?.message,
              description: "Registration failed",
            });
    
          }
        }
      }, [isSuccess, error,data?.message]);

      const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
        },
      });
    
  
    
      async function onSubmit(data:any) {
        // setFormValues(data);
      
        await register(data);
     
      }
    
      form.watch();

  return (
    <div role="tabpanel" className="tab-pane" id="register">
         <Form {...form}>
        <form className={""} onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"space-y-2 flex-col flex gap-3"}>
        <span className="flex flex-col">
        <h1 className="text-[2.2rem] font-black">Register</h1>
       <p  className="sub-title block text-gray-600"> Create your One Faster account</p>
      </span>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <>
                    <FormItem className="flex flex-col items-start w-full ">
                      <FormLabel
                        htmlFor="name"
                        className="text-left flex justify-between w-full"
                      >
                        <p className="text-[1rem]"> Full name </p>{" "}
                      </FormLabel>
                      <FormControl className="dark:text-black">
                        <Input {...field} placeholder={"Enter your full name"} />
                      </FormControl>{" "}
                      <FormMessage />
                    </FormItem>
                  </>
                );
              }}
            />
             <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <>
                    <FormItem className="flex flex-col items-start w-full ">
                      <FormLabel
                        htmlFor="email"
                        className="text-left flex justify-between w-full"
                      >
                        <p className="text-[1rem]"> Email address </p>{" "}
                      </FormLabel>
                      <FormControl className="dark:text-black">
                        <Input placeholder={"Enter your email"} {...field} />
                      </FormControl>{" "}
                      <FormMessage />
                    </FormItem>
                  </>
                );
              }}
            />
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => {
                return (
                  <>
                    <FormItem className="flex flex-col items-start w-full ">
                      <FormLabel
                        htmlFor="MobileNumber"
                        className="text-left flex  w-full"
                      >
                          <p className="text-[1rem] mr-1"> Mobile number </p>
                        <p className="text-slate-600 text-[0.90rem] font-normal">
                          {" "}
                          &#10647;optional&#10648;
                        </p>
                      </FormLabel>
                      <FormControl className="dark:text-black">
                        <Input placeholder={"Enter your mobile number"} {...field} />
                      </FormControl>{" "}
                      <FormMessage />
                    </FormItem>
                  </>
                );
              }}
            />
            <FormField
              control={form.control}
              name={"password"}
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
                          <AiOutlineEyeInvisible
                            className="absolute bottom-3 right-2 z-1 cursor-pointer"
                            size={20}
                            onClick={() => setShow(true)}
                          />
                        ) : (
                          <AiOutlineEye
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
   {!isLoading? (<Button
            type="submit"
            className={
              "mt-8 w-full text-white  bg-[#164ea3] font-normal text-lg"
            }
          >
            Register
          </Button>):(<span
            
            className={
              "mt-8  w-full bg-[#164ea3] h-10 px-4 py-2 flex items-center justify-center rounded-md"
            }
          >
           <ClipLoader color="#ffffff" size={16} />
          </span>)}
          <span className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                  or 
                </span>
              <span className="w-full flex gap-4 items-center justify-between mb-6">
                <Button
                  type="submit"
                  className="p-4 w-full text-[0.9rem] bg-slate-700 gap-2 text-white flex items-center rounded"
                >
                  <p>Continue with google</p>
                  <BsGoogle className="text-[1rem] text-white" />
                </Button></span>
      {/* <div className="form-group">
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
          name="email"
          id="reg_email"
          placeholder="Email address"
          autoComplete="email"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded"
          name="password"
          id="reg_password"
          placeholder="Password"
          autoComplete="new-password"
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Register
        </button>
      </div>
     
    </form>
  </div> */}
   <div className="text-sm text-gray-500 text-center">
        Your personal data will be used to support your experience
        throughout this website in accordance with our{" "}
        <a
          href="/privacy-policy/"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy policy
        </a>
        .
      </div>
  </div>
  </form>
  </Form>
  </div>
  )
}

export default Register