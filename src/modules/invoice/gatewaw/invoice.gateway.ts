import { InvoiceEntity } from "../domain/invoice.entity";

export interface InvoiceGateway {
  find(id: string): Promise<InvoiceEntity>;
  create(invoice: InvoiceEntity): Promise<void>;
}
