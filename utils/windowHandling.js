export async function window(page,action) {
    const [popup]= await Promise.all([
page.waitForEvent("popup"),
action
    ])
    return popup
}