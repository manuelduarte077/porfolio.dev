import { trackCustomEvent } from "../utils/vexo";

export type AnalyticsEventName =
  | "cv-download"
  | "cta-explore-projects"
  | "project-viewed"
  | "project-link-live"
  | "project-link-repo"
  | "contact-email-click"
  | "contact-social-click";

type ProjectLinkPayload = {
  projectId: string;
  projectTitle: string;
};

type ProjectViewedPayload = ProjectLinkPayload & { type: string };

export function track(event: "cv-download"): void;
export function track(event: "cta-explore-projects"): void;
export function track(
  event: "project-viewed",
  payload: ProjectViewedPayload,
): void;
export function track(
  event: "project-link-live" | "project-link-repo",
  payload: ProjectLinkPayload,
): void;
export function track(
  event: "contact-email-click",
  payload: { source: string },
): void;
export function track(
  event: "contact-social-click",
  payload: { platform: string },
): void;
export function track(
  event: AnalyticsEventName,
  payload?: Record<string, string | number | boolean>,
): void {
  trackCustomEvent(event, payload ?? {});
}
