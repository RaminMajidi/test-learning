import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { UserProfile } from "./UserProfile";

describe("UserProfile component", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should show loading state initially", () => {
    vi.mocked(fetch).mockReturnValue(new Promise(() => {}));

    render(<UserProfile userId={1} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display error message when fetch fails", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      json: async () => ({}),
    } as Response);

    render(<UserProfile userId={999} />);

    const errorMessage = await screen.findByRole("alert");
    expect(errorMessage).toHaveTextContent("user not found!");
  });

  it("should call fetch with correct URL", () => {
    vi.mocked(fetch).mockReturnValue(new Promise(() => {}));

    render(<UserProfile userId={43} />);

    expect(fetch).toHaveBeenCalledWith("/api/users/43");
  });
});
