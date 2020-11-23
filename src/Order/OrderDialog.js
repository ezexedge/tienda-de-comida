import React from 'react';

import {Dialog , DialogContent , DialogShadow , DialogFooter ,ConfirmButton } from '../FoodDialog/FoodDialog'

export function OrderDialog({openOrderDialog,setOpenOrderDialog,setOrders}){
    return openOrderDialog ? <>

        <DialogShadow/>
            <Dialog>
                <DialogContent>
                    <h2>Tu orden esta en camino</h2>
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton onClick={()=>{
                        setOrders([])
                        setOpenOrderDialog()
                    }}>
                        estoy hambriento
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
    
    </> : null
}