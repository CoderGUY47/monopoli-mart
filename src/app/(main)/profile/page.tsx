"use client";

import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Modal, Button, Input, Label, TextField, Surface } from "@heroui/react";
import { User, AtSign, ImageIcon, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const router = useRouter();
  const currentSessionData = authClient.useSession();
  const [savedProfileFromStorage, setSavedProfileFromStorage] =  useState<any>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [activeField, setActiveField] = useState<string>("default");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const savedSessionString = localStorage.getItem("user_profile");
    if (savedSessionString) {
      setSavedProfileFromStorage(JSON.parse(savedSessionString));
    }
    setIsCheckingSession(false);
  }, []);

  const handleUpdate = async () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const newlyTypedName = formData.get("name") as string;
    const newlyTypedEmail = formData.get("email") as string;
    const newlyTypedImageUrl = formData.get("image") as string;
    const existingProfileDetails =
      currentSessionData.data?.user || savedProfileFromStorage || {};
    
    // If it's a real session from the DB, update it in the backend
    if (currentSessionData.data?.user) {
      try {
        await authClient.updateUser({
          name: newlyTypedName,
          image: newlyTypedImageUrl,
        });
      } catch (error) {
        toast.error("Failed to update profile in database");
        return;
      }
    }

    const newlyUpdatedProfile = {
      ...existingProfileDetails,
      name: newlyTypedName,
      email: newlyTypedEmail,
      image: newlyTypedImageUrl,
    };

    setSavedProfileFromStorage(newlyUpdatedProfile);
    localStorage.setItem("user_profile", JSON.stringify(newlyUpdatedProfile));
    window.dispatchEvent(new Event("user_profile_updated"));
    toast.success("Profile updated successfully!");
  };

  const currentUserProfile =
    currentSessionData.data?.user || savedProfileFromStorage;
  if (currentSessionData.isPending || isCheckingSession) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-rose-50">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-rose-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!currentUserProfile) {
    router.push("/login");
    return null;
  }

  return (
    <div className="bg-rose-50 px-6 py-16">
      <div className="container mx-auto max-w-4xl border border-rose-100 bg-white p-12 shadow-sm">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-rose-50 pb-10 md:flex-row md:items-center">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 ring-2 ring-rose-100 ring-offset-2">
              <AvatarImage src={currentUserProfile?.image || ""} />
              <AvatarFallback className="bg-rose-500 text-2xl font-bold text-white">
                {currentUserProfile?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-playfair text-3xl font-bold tracking-tight text-black">
                Profile Settings
              </h1>
              <p className="font-outfit mt-1 text-sm text-gray-500">
                Manage your identity and preferences
              </p>
            </div>
          </div>

          <Modal>
            <Modal.Trigger>
              <Button className="w-full rounded-none bg-rose-500 px-10 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-rose-600 md:w-auto">
                Edit Profile
              </Button>
            </Modal.Trigger>
            <Modal.Backdrop>
              <Modal.Container placement="auto">
                <Modal.Dialog className="overflow-hidden rounded-none border border-rose-100 bg-white sm:max-w-md">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Icon className="bg-accent-soft text-accent-soft-foreground rounded-full p-2 transition-all duration-300">
                      {activeField === "name" && (
                        <User className="animate-in zoom-in size-5" />
                      )}
                      {activeField === "email" && (
                        <AtSign className="animate-in zoom-in size-5" />
                      )}
                      {activeField === "image" && (
                        <ImageIcon className="animate-in zoom-in size-5" />
                      )}
                      {activeField === "default" && (
                        <FileText className="animate-in zoom-in size-5" />
                      )}
                    </Modal.Icon>
                    <Modal.Heading className="font-playfair pt-4 text-2xl font-bold text-stone-800">
                      Update Profile
                    </Modal.Heading>
                    <p className="font-outfit mt-1.5 text-sm leading-5 text-gray-500">
                      Update your contact details and account information below.
                    </p>
                  </Modal.Header>
                  <Modal.Body className="p-6">
                    <Surface variant="default">
                      <form className="flex flex-col gap-6" ref={formRef}>
                        <TextField
                          className="w-full"
                          name="name"
                          type="text"
                          defaultValue={currentUserProfile?.name}
                        >
                          <Label className="mb-2 block text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                            Name
                          </Label>
                          <Input
                            onFocus={() => setActiveField("name")}
                            onBlur={() => setActiveField("default")}
                            className="h-12 w-full rounded-none border border-rose-100 px-4 transition-all outline-none focus:border-rose-500 focus:ring-0"
                            placeholder="Enter your name"
                          />
                        </TextField>
                        <TextField
                          className="w-full"
                          name="email"
                          type="email"
                          defaultValue={currentUserProfile?.email}
                        >
                          <Label className="mb-2 block text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                            Email
                          </Label>
                          <Input
                            onFocus={() => setActiveField("email")}
                            onBlur={() => setActiveField("default")}
                            className="h-12 w-full rounded-none border border-rose-100 px-4 transition-all outline-none focus:border-rose-500 focus:ring-0"
                            placeholder="Enter your email"
                          />
                        </TextField>
                        <TextField
                          className="w-full"
                          name="image"
                          type="url"
                          defaultValue={currentUserProfile?.image || ""}
                        >
                          <Label className="mb-2 block text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                            Image URL
                          </Label>
                          <Input
                            onFocus={() => setActiveField("image")}
                            onBlur={() => setActiveField("default")}
                            className="h-12 w-full rounded-none border border-rose-100 px-4 transition-all outline-none focus:border-rose-500 focus:ring-0"
                            placeholder="Enter image URL"
                          />
                        </TextField>

                        <Modal.Footer className="-mx-6 mt-2 -mb-6 flex justify-end gap-3 border-t border-rose-50 px-6 py-4">
                          <Button
                            slot="close"
                            variant="secondary"
                            className="h-12 rounded-none text-[10px] font-bold tracking-widest uppercase"
                          >
                            Cancel
                          </Button>
                          <Button
                            slot="close"
                            onPress={handleUpdate}
                            className="h-12 rounded-none bg-rose-500 px-10 text-[10px] font-bold tracking-widest text-white uppercase hover:bg-rose-600"
                          >
                            Update Profile
                          </Button>
                        </Modal.Footer>
                      </form>
                    </Surface>
                  </Modal.Body>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>

        <div className="grid grid-cols-1 gap-12 text-stone-800 md:grid-cols-3">
          <div className="space-y-1">
            <label className="mb-2 block border-b-2 border-rose-500/40 text-xs font-normal tracking-wide text-gray-400 uppercase">
              Display Name
            </label>
            <p className="font-outfit text-xl font-medium">
              {currentUserProfile?.name}
            </p>
          </div>
          <div className="space-y-1">
            <label className="mb-2 block border-b-2 border-rose-500/40 text-xs font-normal tracking-wide text-gray-400 uppercase">
              Email Address
            </label>
            <p className="font-outfit text-xl font-medium">
              {currentUserProfile?.email}
            </p>
          </div>
          <div className="space-y-1 overflow-hidden">
            <label className="mb-2 block border-b-2 border-rose-500/40 text-xs font-normal tracking-wide text-gray-400 uppercase">
              Profile Image URL
            </label>
            <p
              className="font-outfit truncate text-xl font-medium"
              title={currentUserProfile?.image || ""}
            >
              {currentUserProfile?.image || "Not provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
