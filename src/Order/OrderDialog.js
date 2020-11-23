import React from 'react';

import {Dialog , DialogContent , DialogShadow , DialogFooter ,ConfirmButton } from '../FoodDialog/FoodDialog'

export function OrderDialog({openOrderDialog,setOpenOrderDialog,setOrders}){
    return openOrderDialog ? <>

        <DialogShadow/>
            <Dialog>
                <DialogContent>
                    <h2>Tu orden se ha enviado.En breve se comunicaran para enviarte el pedido</h2>
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton onClick={()=>{
                        setOrders([])
                        setOpenOrderDialog()
                    }}>
                        Seguir comprando
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
    
    </> : null
}