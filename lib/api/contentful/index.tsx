import { getClient } from "./client";
import { ContentfulClientApi } from "contentful";

let _cachedDetails;

type ApiProps = {
  preview?: boolean
}

export class Api {
  private client: ContentfulClientApi;
  private preview: boolean;

  constructor({preview}: ApiProps) {
    this.preview = !!preview;
    this.client = getClient(this.preview);
  }

  async getTestimonials(): Promise<any[]> {
    return (await this.client.getEntries({
      content_type: 'testimonial'
    })).items.map(it => it.fields)
  }

  async getServices(): Promise<any[]> {
    const services = await this.client.getEntries({
      content_type: 'serviceDescription'
    }) as any;
    return services.items;
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
    const { id, ...contact } = detailsEntry.items[0]!.fields as any;
    return contact;
  }

  async getGlobalContext() {
    return {
      contact: await this.getContactDetails(),
      preview: this.preview
    }
  }

  async getLandingPage() {
    const response = await this.client.getEntries<{body: any}>({
      content_type: 'page-landing'
    });

    return response?.items?.[0];
  }

  async getById(id: string) {
    const response = await this.client.getEntries({
      "sys.id": id,
    });
    return response.items?.[0]?.fields;
  }

  async getGardenDesignPage() {
    return await this.getById("7EkfIbN6qR5bMalocZSIjC");
  }

  async getOnlinePlantingPage() {
    return await this.getById("2A65IH69RDrKuV7dwuHHYs");
  }

  async getProjects() {
    const response = await this.client.getEntries({
      content_type: "project"
    });
    return response.items ?? [];
  }

  async getAbout() {
    const response = await this.client.getEntries({
      content_type: "pageAbout"
    });
    return response?.items?.[0]
  }
}