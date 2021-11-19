// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';


export class Nft implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public ownerDidId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Nft entity without an ID");
        await store.set('Nft', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Nft entity without an ID");
        await store.remove('Nft', id.toString());
    }

    static async get(id:string): Promise<Nft | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Nft entity without an ID");
        const record = await store.get('Nft', id.toString());
        if (record){
            return Nft.create(record);
        }else{
            return;
        }
    }


    static async getByOwnerDidId(ownerDidId: string): Promise<Nft | undefined>{
      
      const record = await store.getOneByField('Nft', 'ownerDidId', ownerDidId);
      if (record){
          return Nft.create(record);
      }else{
          return;
      }
      
    }


    static create(record: Partial<Omit<Nft, FunctionPropertyNames<Nft>>> & Entity): Nft {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Nft(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
