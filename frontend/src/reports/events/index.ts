import { get } from "../../api";
import type { Event } from "../../entries";
import { _ } from "../../i18n";
import { getURLFilters } from "../../stores/filters";
import { Route } from "../route";
import Events from "./Events.svelte";

export interface EventsReportProps {
  events: Event[];
}

export const events = new Route<EventsReportProps>(
  "events",
  Events,
  async (url: URL) =>
    get("events", getURLFilters(url)).then((data) => ({ events: data })),
  () => _("Events"),
);
