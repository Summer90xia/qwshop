<?php

namespace App\Http\Resources\Home\MoneyLogResource;

use Illuminate\Http\Resources\Json\ResourceCollection;

class MoneyLogCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data'=>$this->collection->map(function ($item) {
                return [
                    'id'                    =>  $item->id,
                    'name'                  =>  $item->name,
                    'money'                 =>  $item->money,
                    'is_type'               =>  $item->is_type,
                    'info'                  =>  $item->info,
                    'created_at'            =>  $item->created_at->format('Y-m-d H:i:s'),
                ];
            }),
            // 'data'=>$this->collection,
            'total'=>$this->total(), // 数据总数
            'per_page'=>$this->perPage(), // 每页数量
            'current_page'=>$this->currentPage(), // 当前页码
        ];
    }
}
