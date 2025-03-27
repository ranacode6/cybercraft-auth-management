import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
// import { Helmet } from 'react-helmet-async';
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   EmailShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   EmailIcon
// } from 'react-share';
// import { Mail, Globe, Phone, MapPin } from 'lucide-react';
import axios from 'axios';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  // const shareUrl = window.location.href;

  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_SERVER_URL}/api/contacts`, data)
        .then((response) => {
          toast.success('Message sent successfully!');
          console.log(response);
          axios
            .post(
              `${import.meta.env.VITE_SERVER_URL}/api/createandsendpdf`,
              data
            )
            .then((response) => {
              toast.success('Pdf created and sent successfull');
              console.log(response);
            });
        });

      reset();
    } catch (error) {
      toast.error('Failed to send message');
    }
  };
  return (
    <div className="bg-[#e2ebff] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#e2ebff] overflow-hidden w-full max-w-[1920px] relative">
        {/* Background decorative elements */}
        <div className="relative w-full h-[1006px] overflow-hidden">
          <div className="absolute top-0 left-52 w-full h-full">
            {/* Gradient background */}
            <div className="absolute w-[800px] h-[2000px] top-[-50px] left-[300px] rotate-[35.97deg] [background:linear-gradient(180deg,rgba(86,145,231,0.5)_0%,rgba(51,102,204,0.5)_100%)]" />

            {/* All the decorative SVG elements */}
            <img
              className="absolute w-[7px] h-[7px] top-[345px] left-[1056px]"
              alt="Oval"
              src="/oval.svg"
            />
            <img
              className="absolute w-[117px] h-[172px] top-[134px] left-[957px]"
              alt="Shape"
              src="/shape-2.svg"
            />
            <img
              className="absolute w-[42px] h-[61px] top-[555px] left-[425px]"
              alt="Shape"
              src="/shape-1.svg"
            />
            <img
              className="absolute w-[7px] h-[7px] top-[573px] left-[1041px]"
              alt="Oval"
              src="/oval.svg"
            />
            <img
              className="absolute w-[7px] h-[7px] top-[426px] left-[826px]"
              alt="Oval"
              src="/oval.svg"
            />
            <img
              className="absolute w-[7px] h-[7px] top-[386px] left-[345px]"
              alt="Oval"
              src="/oval.svg"
            />
            <img
              className="absolute w-[7px] h-[7px] top-[773px] left-[358px]"
              alt="Oval"
              src="/oval.svg"
            />
            <img
              className="absolute w-[7px] h-[7px] top-[109px] left-[841px]"
              alt="Oval"
              src="/oval.svg"
            />
            <img
              className="absolute w-[7px] h-[7px] top-[649px] left-[515px]"
              alt="Oval"
              src="/oval.svg"
            />
            <img
              className="absolute w-[7px] h-[7px] top-[164px] left-[489px]"
              alt="Oval"
              src="/oval.svg"
            />
            <img
              className="absolute w-[13px] h-2.5 top-[509px] left-[540px]"
              alt="Path"
              src="/path-5.svg"
            />
            <img
              className="absolute w-[13px] h-2.5 top-[75px] left-[625px]"
              alt="Path"
              src="/path-5.svg"
            />
            <img
              className="absolute w-[13px] h-2.5 top-[738px] left-[800px]"
              alt="Path"
              src="/path-1.svg"
            />
            <img
              className="absolute w-[13px] h-2.5 top-[866px] left-[1056px]"
              alt="Path"
              src="/path-1.svg"
            />
            <img
              className="absolute w-[13px] h-2.5 top-[485px] left-[904px]"
              alt="Path"
              src="/path-1.svg"
            />
            <img
              className="absolute w-[13px] h-2.5 top-[776px] left-[478px]"
              alt="Path"
              src="/path-1.svg"
            />
            <img
              className="absolute w-[13px] h-2.5 top-[203px] left-[317px]"
              alt="Path"
              src="/path-1.svg"
            />
            <img
              className="absolute w-3.5 h-[7px] top-[254px] left-[957px]"
              alt="Path"
              src="/path-24.svg"
            />
            <img
              className="absolute w-[9px] h-[13px] top-[82px] left-[1043px]"
              alt="Path"
              src="/path-5.svg"
            />
            <img
              className="absolute w-[9px] h-[13px] top-[615px] left-[321px]"
              alt="Path"
              src="/path-5.svg"
            />
            <img
              className="absolute w-[146px] h-[35px] top-[422px] left-[933px]"
              alt="Path"
              src="/path-4.svg"
            />
            <img
              className="absolute w-[60px] h-4 top-[493px] left-[1013px]"
              alt="Path"
              src="/path-4.svg"
            />
            <img
              className="absolute w-[815px] h-[3px] top-[915px] left-[264px]"
              alt="Path"
              src="/path-2.svg"
            />
            <img
              className="absolute w-[33px] h-[33px] top-[883px] left-[744px]"
              alt="Oval"
              src="/oval-5.svg"
            />
            <img
              className="absolute w-[33px] h-[33px] top-[883px] left-[505px]"
              alt="Oval"
              src="/oval-5.svg"
            />
            <img
              className="absolute w-[294px] h-[364px] top-[336px] left-[672px]"
              alt="Shape"
              src="/shape-7.svg"
            />
            <img
              className="absolute w-[61px] h-[250px] top-[515px] left-[623px]"
              alt="Path"
              src="/path-14.svg"
            />
            <img
              className="absolute w-[201px] h-[198px] top-[403px] left-[759px]"
              alt="Path"
              src="/path-35.svg"
            />
            <img
              className="absolute w-[116px] h-[335px] top-[441px] left-[587px]"
              alt="Path"
              src="/path-18.svg"
            />
            <img
              className="absolute w-[43px] h-[50px] top-[135px] left-[654px]"
              alt="Path"
              src="/path-19.svg"
            />
            <img
              className="absolute w-[69px] h-3 top-[152px] left-[627px]"
              alt="Path"
              src="/path-22.svg"
            />
            <img
              className="absolute w-11 h-[57px] top-[158px] left-[650px]"
              alt="Path"
              src="/path-34.svg"
            />
            <img
              className="absolute w-8 h-[26px] top-[201px] left-[662px]"
              alt="Shape"
              src="/shape-4.svg"
            />
            <img
              className="absolute w-[23px] h-3.5 top-[206px] left-[664px]"
              alt="Path"
              src="/path-26.svg"
            />
            <img
              className="absolute w-3.5 h-4 top-[180px] left-[687px]"
              alt="Path"
              src="/path-28.svg"
            />
            <img
              className="absolute w-[17px] h-[30px] top-[170px] left-[651px]"
              alt="Path"
              src="/path-33.svg"
            />
            <img
              className="absolute w-3.5 h-1.5 top-[171px] left-[670px]"
              alt="Path"
              src="/path-23.svg"
            />
            <img
              className="absolute w-[13px] h-2 top-[195px] left-[665px]"
              alt="Path"
              src="/path-31.svg"
            />
            <img
              className="absolute w-2.5 h-1.5 top-[184px] left-[687px]"
              alt="Path"
              src="/path-21.svg"
            />
            <img
              className="absolute w-[13px] h-1.5 top-[177px] left-[671px]"
              alt="Path"
              src="/path-32.svg"
            />
            <img
              className="absolute w-[13px] h-1.5 top-[177px] left-[651px]"
              alt="Path"
              src="/path-32.svg"
            />
            <img
              className="absolute w-[207px] h-[172px] top-[280px] left-[619px]"
              alt="Path"
              src="/path-30.svg"
            />
            <img
              className="absolute w-1 h-1 top-[179px] left-[675px]"
              alt="Oval"
              src="/oval-5.svg"
            />
            <img
              className="absolute w-1 h-1 top-[178px] left-[655px]"
              alt="Oval"
              src="/oval-5.svg"
            />
            <img
              className="absolute w-[5px] h-[7px] top-[185px] left-[690px]"
              alt="Path"
              src="/path-25.svg"
            />
            <img
              className="absolute w-[211px] h-[141px] top-[214px] left-[593px]"
              alt="Path"
              src="/path-27.svg"
            />
            <img
              className="absolute w-1.5 h-[21px] top-[268px] left-[733px]"
              alt="Path"
              src="/path-29.svg"
            />
            <img
              className="absolute w-[38px] h-[29px] top-[418px] left-[632px]"
              alt="Shape"
              src="/shape-5.svg"
            />
            <img
              className="absolute w-[260px] h-[223px] top-[237px] left-[435px]"
              alt="Path"
              src="/path.svg"
            />
            <img
              className="absolute w-[232px] h-[221px] top-[238px] left-[436px]"
              alt="Shape"
              src="/shape.svg"
            />
            <img
              className="absolute w-[100px] h-[38px] top-[437px] left-[603px]"
              alt="Path"
              src="/path-7.svg"
            />
            <img
              className="absolute w-[155px] h-[68px] top-[786px] left-[529px]"
              alt="Path"
              src="/path-11.svg"
            />
            <img
              className="absolute w-[158px] h-[91px] top-[766px] left-[527px]"
              alt="Shape"
              src="/shape-6.svg"
            />
            <img
              className="absolute w-[52px] h-[39px] top-[817px] left-[685px]"
              alt="Path"
              src="/path-10.svg"
            />
            <img
              className="absolute w-[77px] h-[165px] top-[617px] left-[963px]"
              alt="Path"
              src="/path-12.svg"
            />
            <img
              className="absolute w-[99px] h-[172px] top-[613px] left-[943px]"
              alt="Shape"
              src="/shape-3.svg"
            />
            <img
              className="absolute w-[500px] h-[75px] top-[815px] left-[395px]"
              alt="Path"
              src="/path-13.svg"
            />
          </div>

          {/* Contact form section */}
          <Card className="absolute top-1/2 left-[201px] transform -translate-y-1/2 w-[487px] bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              {/* Logo */}
              <img
                className="w-[294px] h-[129px] mb-6 object-cover"
                alt="CyberCraft Bangladesh Logo"
                src="/asset-1-1.png"
              />

              {/* Welcome text */}
              <div className="mb-8 font-normal text-[#343434] text-xl">
                Welcome back to CyberCraft Bangladesh, where your creativity
                thrives
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm text-[#345484] font-normal"
                  >
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    {...register('fullName', {
                      required: 'Full name is required'
                    })}
                    placeholder="Your full name"
                    className="bg-white border-[#d8dadc] rounded-[10px] h-14 px-4"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#345484] font-normal"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="example@gmail.com"
                    className="bg-white border-[#d8dadc] rounded-[10px] h-14 px-4"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm text-[#345484] font-normal"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    {...register('message', {
                      required: 'Message is required'
                    })}
                    placeholder="Write message"
                    className="bg-white border-[#d8dadc] rounded-[10px] min-h-[139px] px-4 py-[18px]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button className="w-full h-14 bg-[#345484] hover:bg-[#2a4369] text-white font-semibold rounded-[10px] mb-3">
                  Submit
                </Button>
                <Link
                  to="/login"
                  className="text-red-500 font-semibold underline"
                >
                  Admin Login
                </Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
