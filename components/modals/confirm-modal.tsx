"use client";


import {  
 AlertDialog,
 AlertDialogAction,
    AlertDialogContent,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogHeader,
    AlertDialogFooter,

} from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
};


export const ConfirmModal = ({
    children,
    onConfirm
}:
    ConfirmModalProps) => {
        const handleConform =(
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
            e.stopPropagation();
            onConfirm();
        };
        

    return (
        <AlertDialog>
            <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
                {children}
             </AlertDialogTrigger>
             <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Are you sure?
                </AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone.
                </AlertDialogDescription>            

            </AlertDialogHeader>

            <AlertDialogFooter>
                <AlertDialogCancel onClick={e => e.stopPropagation()}>
                    Cancel

                </AlertDialogCancel>
                 <AlertDialogAction onClick={handleConform}>
                    confirm 
                 </AlertDialogAction>
            </AlertDialogFooter>
             </AlertDialogContent>
             
             </AlertDialog>


    )};