# Tools

### Guide

[https://squidfunk.github.io/mkdocs-material/reference/](https://squidfunk.github.io/mkdocs-material/reference/)

## Math

$$
L \space \{f(t)\} = \int_{o^-}^{\infty}{f(x) e^{-st} dt} = F(s)
$$

$$
L^{-1}\space = \{ F(s)\} = \frac{1}{2\pi i} \lim_{T \to \infty} \int_{\gamma-iT}^{\gamma+iT} {e^{sT} F(s) ds} = f(t)
$$

$$
T(n) =
 \begin{cases}     \text{Theta } 1      & \quad \text{if } n = 0
 \\ a*T\frac{n}{b} + O(n^k)  & \quad \text{if } n > 0
 \end{cases}
$$

## Coding

```c title="Heap Sort" linenums="1"
h.A = A; //New Heap
h.size = A.lenght;
Build_Max_Heap(h); //make a heap from an array
for( i = h.A.length-1; i > 1 ; i--) {
  exchange_slots(A,0,i);
  h.size = h.size – 1;
  Max-heapify(h,0); //make node i the highest priority of the sub tree
}
```

```py title="Main.py" hl_lines="2 3"
if __name__ == "__main__":
    just_fix_windows_console() #it’s safe to call this function on non-Windows platforms
    CoreLogic()
```

## Content Tabs

=== "Seiun Sky"

    Etiam eleifend dictum erat. Etiam vel felis vitae turpis aliquet feugiat. Proin vel ex arcu. Sed quis nulla interdum, mollis lorem vitae, euismod tortor. Sed a odio ligula. Curabitur finibus pellentesque purus, vel feugiat dui. Suspendisse potenti.

=== "A"

    - No time to lose.
    * I'm trying to figure out a way to get rid of you so I can go commit atrocities. ...Wait, did you think I was being serious?

=== "B"

    1. Da-da-da~
    1. Lalala~

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Oguri Cap!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Maruzensky!" << std::endl;
      return 0;
    }
    ```

## Admonitions

??? example "Collassabile"

    Lorem ipsum

    ???+ note "Outer Note"

        dolor

        ??? note "Inner Note"

            sit amet

??? example "Inline examples"

    !!! info inline "Inline"

    !!! info inline end "Inline End"

!!! note ""

    No title

??? tip "All types"

    !!! note
    !!! abstract
    !!! info
    !!! tip
    !!! success
    !!! question
    !!! warning
    !!! failure
    !!! danger
    !!! bug
    !!! example
    !!! quote

## Annotations

=== "Base"

    ```
    A golden chest on the horizon, everyone amazed. (1)
    { .annotate }

    1. This look shiny!
    ```

    A golden chest on the horizon, everyone amazed. (1)
    { .annotate }

    1. This look shiny!

=== "Inside Admonitions"

    !!! note annotate "Exampleeee! (1)"

        Is time to gamble! (2) Again!

    1.  :thumbs_up: I'm an annotation!
    2.  :thumbs_up: I'm an annotation as well!

=== "HTML"

    <div class="annotate" markdown>
    > A golden chest on the horizon, everyone amazed. (1)
    </div>

    1.  This look like not a coding language!

=== "Code"

    ``` yaml
    title: "Example" # (1)!
    ```

    1.  Look ma, less line noise!

## Buttons

[Button + Emoji :material-emoticon:](#){ .md-button }

[Button](#){ .md-button .md-button--primary }

## Content tabs

## Data tables

|  Method  | Description                          |
| :------: | :----------------------------------- |
|  `GET`   | :material-check: Fetch resource      |
|  `PUT`   | :material-check-all: Update resource |
| `DELETE` | :material-close: Delete resource     |

## Diagrams
