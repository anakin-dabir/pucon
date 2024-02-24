import React, { useState } from "react";
import XStack from "../../components/XStack";
import XNavbar from "../../components/Custom/XNavbar";
import XButton from "../../components/XButton";
import XDivider from "../../components/Custom/XDivider";
import { ReactComponent as Settings } from "@/assets/custom/settings.svg";
import { ReactComponent as History } from "@/assets/custom/history.svg";
import { ReactComponent as Edit } from "@/assets/custom/edit.svg";
import { Avatar, Button, IconButton } from "@mui/material";
import getDate from "../../utils/getDate";
import { ReactComponent as Star } from "@/assets/custom/star.svg";
import { ReactComponent as Project } from "@/assets/custom/project.svg";
import XTooltip from "../../components/XTooltip";
import XChip from "../../components/XChip";
import BackButton from "../../components/Custom/BackButton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import shortName from "../../utils/shortName";

const DocumentView = () => {
  const isLogged = useSelector((state) => state.user.user);
  const { id } = useParams();
  return (
    <>
      <XNavbar />
      {/* <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 pr-1 pl-6 py-4'>
        <div className='overflow-y-auto relative h-full w-full flex gap-3'>
          <div className='h-full w-[75%]'>
            <XStack className='min-h-full w-full p-8 !bg-secondary_background/90 !drop-shadow-none flex flex-col gap-5'>
              <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-2 justify-between'>
                  <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-1'>
                      <BackButton />
                      <div className='text-xl font-bold text-primary_main'>{document.title}</div>
                    </div>
                    <XButton disabled className='px-3 py-[0.1rem]'>
                      {document.visibility}
                    </XButton>
                  </div>
                  {isLogged && (
                    <div className='flex gap-2'>
                      <Button className='gap-2'>
                        <div className='capitalize'>125 Changes</div>
                        <History />
                      </Button>
                      <XTooltip data='Settings' placement='top'>
                        <IconButton>
                          <Settings />
                        </IconButton>
                      </XTooltip>
                      <XTooltip data='Edit' placement='top'>
                        <IconButton>
                          <Edit />
                        </IconButton>
                      </XTooltip>
                    </div>
                  )}
                </div>

                <XDivider />
              </div>
            </XStack>
          </div>
          <div className='flex flex-col flex-1 mr-4 gap-3'>
            <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <div className='text-lg font-bold text-primary_main'>About </div>
                  <div className='text-sm'>{document.desc}</div>
                </div>

                <div className='flex items-center gap-2'>
                  <Avatar src={document.creator.img}>{shortName(document.creator.name)}</Avatar>
                  <div className='flex flex-col'>
                    <div className='text-sm font-bold text-primary_main'>
                      {document.creator.name}
                    </div>
                    <div className='text-xs'>{getDate(document.createdAt)}</div>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <Project />
                    <div className='text-xs leading-3'>{document.project.name} Project</div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Star />
                    <div className='text-xs leading-3'>{document.stars} Stars</div>
                  </div>
                </div>
              </div>
            </XStack>
            <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5'>
              <div className='h-full w-full flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <div className='text-lg font-bold text-primary_main'>Contributors </div>
                    <XChip label={document.collaborators.length} className='!px-3 !py-1' />
                  </div>
                </div>

                <div className='flex items-center gap-2 flex-wrap'>
                  {document.collaborators.map((collaborator, index) => {
                    return (
                      <XTooltip key={index} placement='top' data={collaborator.name}>
                        <Avatar src={collaborator.img}>{shortName(collaborator.name)}</Avatar>
                      </XTooltip>
                    );
                  })}
                </div>
              </div>
            </XStack>
          </div>
        </div>
      </XStack> */}
    </>
  );
};

export default DocumentView;
