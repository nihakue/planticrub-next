import { getClient } from "./client";
import { ContentfulClientApi } from "contentful";

let _cachedDetails;

type ApiProps = {
  preview: boolean
}

export class Api {
  private client: ContentfulClientApi
  constructor({preview}: ApiProps) {
    this.client = getClient(preview);
  }

  async getTestimonials(): Promise<any[]> {
    return (await this.client.getEntries({
      content_type: 'testimonial'
    })).items.map(it => it.fields)
  }

  async getServices(): Promise<any[]> {
    return (await this.client.getEntries({
      content_type: 'services'
    })).items[0].fields.items.map((it: any) => it.fields)
  }

  async getGallery(): Promise<any[]> {
    return []
  }

  async getContactDetails() {
    if (_cachedDetails) {
      return _cachedDetails;
    }
    const detailsEntry = await this.client.getEntries({
      content_type: 'contact',
      'fields.id': 'robyn'
    });
    // Strip id from fields
    const { id, ...contact } = detailsEntry.items[0]!.fields
    return contact;
  }

  async getGlobalContext() {
    return {
      contact: await this.getContactDetails()
    }
  }
}